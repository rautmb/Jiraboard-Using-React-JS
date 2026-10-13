import {Tagstyle,Tagkey} from '../../Constants/const'

const Tag = (props) => {
    const{tagName,selectedTag,selected}=props;

    const key=Tagkey[tagName];

  return (
    <div>
      <button className="tag" type="button" style={selected ? Tagstyle[key]:{}} onClick={()=>{selectedTag(tagName)}}>{tagName}</button>
    </div>
  )
}

export default Tag;
