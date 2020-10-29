const getServicesByCategories = categories => {
  const servicesByCategories = {};

  for (let category of categories) {
    if (!servicesByCategories[category.category_id]) {
      servicesByCategories[category.category_id] = {
        category_id: category.category_id,
        category: category.category,
        category_description: category.category_description,
        category_thumbnail: category.category_thumbnail,
        category_cover_photo: category.category_cover_photo,
        services: []
      };
    }

    servicesByCategories[category.category_id].services.push({
      service_id: category.service_id,
      service: category.service,
      service_description: category.service_description,
      service_thumbnail: category.service_thumbnail,
      min_rate: category.min_rate,
      max_rate: category.max_rate,
    });

  }
  const orderedCategories = Object.values(servicesByCategories).sort((a, b) => {
    if (a.category < b.category) {
      return -1;
    }
    if (a.category > b.category) {
      return 1;
    }
    return 0;
  })

  return orderedCategories;
};

module.exports = {
  getServicesByCategories
};