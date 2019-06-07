import {types} from "mobx-state-tree";

const SupportingData = types.model({
    passedText: types.optional(types.string, "")
  })
  .actions(self => ({
      setPassedText(inputtedText: string){
        self.passedText = inputtedText;
      }
  }))
  .actions(self => ({
    getPassedText(): string{
      console.log(self.passedText);
      return self.passedText
      }
  }));

export default SupportingData;
