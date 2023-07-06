import useBanksList from "@/payments/react/methods/pse/hooks/useFetchBanksList";

const PseForm = () => {
  const { banksList, isLoading } = useBanksList();

  return (
    <div>
      <h1>Formulario de PSE</h1>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <ul>
          {banksList.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PseForm;
