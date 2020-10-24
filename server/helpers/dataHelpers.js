const getServicesByCategories = categories => {
  const servicesByCategories = {};

  for (let category of categories) {
    if (!servicesByCategories[category.category_id]) {
      servicesByCategories[category.category_id] = {
        category_id: category.category_id,
        category: category.category,
        category_description: category.category_description,
        services: []
      };
    }

    servicesByCategories[category.category_id].services.push({
      service_id: category.service_id,
      service: category.service,
      service_description: category.service_description,
      min_rate: category.min_rate,
      max_rate: category.max_rate,
    });

  }

  return Object.values(servicesByCategories);
};

module.exports = {
  getServicesByCategories
};