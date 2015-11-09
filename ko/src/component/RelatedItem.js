// LICENSE : MIT
"use strict";
import element from 'virtual-element'
export function render(component) {
    let {props, state, id} = component;
    return <a className="RelatedItem" href={props.url} target="_blank">{props.title}</a>
}
export default {
    render
}