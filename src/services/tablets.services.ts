import Tablet from '../models/tablet';

const getAllTablets = async () => {
  const tablets = await Tablet.findAll();
  console.log('Tablets retrieved:', tablets);
  return tablets;
};


const getTabletById = async (tabletId: string) => {
  return Tablet.findByPk(tabletId);
};

const tabletService = { getAllTablets, getTabletById };

export default tabletService;
