import React from 'react';
import {
  Actionsheet,
  Center,
  NativeBaseProvider,
} from "native-base";

const PopUpMenu = ({listchoice, doAction, isOpen}: any) => {    
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Actionsheet isOpen={isOpen} >
          <Actionsheet.Content>
            {listchoice.map((e: string, index: any) => (
              <Actionsheet.Item 
                key={e}
                onPress={() => doAction(index)}
              >
                {e}
              </Actionsheet.Item>
            ))}
          </Actionsheet.Content>
        </Actionsheet>
      </Center>
    </NativeBaseProvider>
  );
}

export {PopUpMenu};
