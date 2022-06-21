import { Card } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import DisplayTags from "./Components/DisplayTags";
import { generateMetaTags } from "./Generator/Generator";
import MetaTagForm from "./Components/MetaTagForm";

export default function App() {
  const [tags, setTags] = useState("");
  const [collections, setCollections] = useState({
    title: "",
    description: "",
    keywords: "",
    author: "",
    url: "",
    imageUrl: ""
  });

  useEffect(() => {
    setTags(generateMetaTags(collections))
  }, [collections])

  return (
    <div className="App Container">
      <title>Meta Tag Generator</title>
      <Card style={{ width: "100%", backgroundColor: "#232323", color: "#FFFFFF" }}>
        <Card.Body>
          <h1 className="meta-tag-title">Meta Tag Generator</h1>
          <MetaTagForm collections={collections} setCollections={setCollections} />
          <DisplayTags metaTags={tags}/>
        </Card.Body>
      </Card>
    </div>
  )
}