// utils/schemaValidator.js

function validateObject(object, schema) {
  const errors = [];

  for (const [key, expectedType] of Object.entries(schema)) {
    const value = object[key];

    if (!(key in object)) {
      errors.push(`❌ Missing key: ${key}`);
    } else if (expectedType === 'null') {
      if (value !== null) {
        errors.push(`❌ "${key}" should be null but got ${typeof value}`);
      }
    } else if (typeof value !== expectedType) {
      errors.push(
        `❌ Invalid type for "${key}": expected "${expectedType}", got "${typeof value}"`
      );
    }
  }

  return errors;
}

function validateSchema(data, schema) {
  const allErrors = [];

  if (Array.isArray(data)) {
    data.forEach((item, index) => {
      const errors = validateObject(item, schema);
      if (errors.length > 0) {
        allErrors.push(`🔍 Item at index ${index}:\n${errors.join('\n')}`);
      }
    });
  } else {
    const errors = validateObject(data, schema);
    if (errors.length > 0) {
      allErrors.push(errors.join('\n'));
    }
  }

  return allErrors;
}

export { validateSchema };
