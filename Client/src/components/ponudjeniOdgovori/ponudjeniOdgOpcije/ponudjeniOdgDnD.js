import React, { Component } from "react";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import classes from "./ponudjeniOdgDnD.module.css";
import arrayMove from "array-move";

const SortableItem = SortableElement(({ value, index }) => (
  <li id={value} className={classes.Li}>
    {value}
  </li>
));

const SortableList = SortableContainer(({ items }) => {
  return (
    <ul className={classes.Ul}>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </ul>
  );
});

class PonudjeniOdgDnD extends Component {
  state = {
    items: this.props.odg
  };
  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ items }) => ({
      items: arrayMove(items, oldIndex, newIndex)
    }));
    let noviLijevi = [...document.querySelectorAll("li")];
    let odgovor = noviLijevi.map(item => item.id).join();
    this.props.provera(odgovor);
  };
  render() {
    return <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />;
  }
}
export default PonudjeniOdgDnD;
