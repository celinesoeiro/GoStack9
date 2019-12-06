import React from 'react';
import PropTypes from 'prop-types';

function TechItem({tech, onDelete}){
  return (
    <li>
      {tech}
      <button onClick = {onDelete} type = "button">Remover</button>
    </li>
  );
}

// defaultProps : Preenche com uma info padrão caso o usuário não coloque nada
TechItem.defaultProps = {
  tech : 'Oculto',
};

TechItem.PropTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
}

export default TechItem;
