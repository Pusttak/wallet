import {
  Total,
  Tabrow,
  TabHeader,
  Tabl,
  TableHead,
  TableHeadTr,
  TableBody,
  BodyTr,
  BodyText,
  TotalExpenses,
  TotalIncome,
} from './table.styled';

export function Table({ statistics }) {
  if (!statistics) {
    return null;
  }
  const { totalExpenses, totalIncome, totalCategories } = statistics;

  return (
    <>
      {!totalExpenses && !totalIncome ? null : (
        <Tabl>
          <TableHead>
            <TableHeadTr>
              <TabHeader>Category</TabHeader>
              <TabHeader>Sum</TabHeader>
            </TableHeadTr>
          </TableHead>
          <TableBody>
            {totalCategories.map(category => (
              <BodyTr key={category.id}>
                <Tabrow>
                  <p
                    style={{
                      backgroundColor: category.color,
                      width: '24px',
                      height: '24px',
                      borderRadius: '2px',
                    }}
                  ></p>
                  <BodyText>{category.title}</BodyText>
                </Tabrow>
                <Tabrow></Tabrow>
                <Tabrow>
                  <BodyText>{category.total ? category.total : 0}</BodyText>
                </Tabrow>
              </BodyTr>
            ))}
          </TableBody>
        </Tabl>
      )}
      <Total>
        Expenses:
        <TotalExpenses>{totalExpenses}</TotalExpenses>
      </Total>
      <Total>
        Income: <TotalIncome>{totalIncome}</TotalIncome>
      </Total>
    </>
  );
}
