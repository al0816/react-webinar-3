import React, {useCallback} from 'react';
import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";
import Cart from "./components/cart";

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({store}) {
  const list = store.getState().list;


  const callbacks = {
    onOpenCart: useCallback((code) => {
      store.onOpenCart();
    }, [store]),


  }
  return (
    <PageLayout>
      <Head title='Магазин'/>
      <Controls onAdd={callbacks.onOpenCart} />
      <List list={list}/>
    </PageLayout>
  );
}

export default App;
