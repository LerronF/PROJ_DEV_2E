using MicroOrm.Dapper.Repositories;
using P2E.Importacao.Domain.Entities;
using P2E.Shared.Model;

namespace P2E.Importacao.Domain.Repositories
{
    public interface IHistoricoRepository : IDapperRepository<Historico>
    {
        DataPage<Historico> GetByPage(DataPage<Historico> page, string tx_status);
    }
}
