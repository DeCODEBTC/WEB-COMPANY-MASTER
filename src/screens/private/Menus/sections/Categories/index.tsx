import React, { useEffect, useState } from "react";
import {
  getCategories,
  IGetCategoriesResponseDto,
} from "../../../../../api/menus";
import BoxContainer from "../../../../../components/layout/Container";

// import { Container } from './styles';

const Categories: React.FC = () => {
  const [listCategories, setListCategories] = useState<
    IGetCategoriesResponseDto[]
  >([]);

  useEffect(() => {
    const init = async () => {
      const response = await getCategories();

      if (response.data) {
        setListCategories(response.data);
      }
    };
    init();
  }, []);

  return (
    <BoxContainer>
      <h4>Menus</h4>
      <table
        className="table"
        style={{
          width: "100%",
        }}>
        <thead>
          <tr>
            <th>Código</th>
            <th>Titulo</th>
            <th>Delivey</th>
            <th>Balcão ou mesa</th>
          </tr>
        </thead>
        <tbody>
          {listCategories.map((a) => (
            <tr key={a.id}>
              <td>{a.code}</td>
              <td>{a.name}</td>
              <td>{a.deliveryVisible}</td>
              <td>{a.tableVisible}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </BoxContainer>
  );
};

export default Categories;
