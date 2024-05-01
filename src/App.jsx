import { useState } from "react";
import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from "./data-with-examples.js";
import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConsept.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("components");

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton.toLowerCase());
    console.log({ selectedTopic, EXAMPLES });
  }

  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2> Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("JSX")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("Props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("State")}
            >
              State
            </TabButton>
          </menu>

          {!selectedTopic ? <p>Please selected a topic.</p> : null}
          {selectedTopic ? (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          ) : null}
        </section>
      </main>
    </>
  );
}

export default App;
