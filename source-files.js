var sourcesIndex = JSON.parse('{\
"dbtool":["",[],["dump.rs","main.rs"]],\
"distributedgen":["",[],["distributedgen.rs"]],\
"fedimint_aead":["",[],["lib.rs"]],\
"fedimint_bin_tests":["",[],["federation.rs","main.rs","util.rs"]],\
"fedimint_bitcoind":["",[],["bitcoincore_rpc.rs","lib.rs"]],\
"fedimint_build":["",[],["lib.rs"]],\
"fedimint_cli":["",[],["main.rs"]],\
"fedimint_client":["",[["module",[],["gen.rs","mod.rs"]],["sm",[],["dbtx.rs","executor.rs","mod.rs","notifier.rs","state.rs","util.rs"]],["transaction",[],["builder.rs","mod.rs","sm.rs"]]],["db.rs","lib.rs"]],\
"fedimint_client_legacy":["",[["api",[],["fake.rs"]],["ln",[],["db.rs","incoming.rs","mod.rs","outgoing.rs"]],["mint",[],["backup.rs","db.rs","mod.rs"]],["wallet",[],["db.rs","mod.rs"]]],["api.rs","db.rs","lib.rs","outcome.rs","transaction.rs","utils.rs"]],\
"fedimint_core":["",[["core",[],["client.rs","server.rs"]],["db",[],["mem_impl.rs","mod.rs","notifications.rs"]],["encoding",[],["btc.rs","mod.rs","secp256k1.rs","tbs.rs","tls.rs"]],["hex",[],["mod.rs","serde.rs"]],["module",[],["audit.rs","interconnect.rs","mod.rs","registry.rs"]],["net",[["peers",[],["fake.rs"]]],["mod.rs","peers.rs"]],["util",[],["broadcaststream.rs","mod.rs"]]],["admin_client.rs","api.rs","bitcoin_rpc.rs","cancellable.rs","config.rs","core.rs","epoch.rs","fmt_utils.rs","lib.rs","macros.rs","outcome.rs","query.rs","task.rs","tiered.rs","tiered_multi.rs","time.rs","timing.rs","transaction.rs","txoproof.rs"]],\
"fedimint_derive":["",[],["lib.rs"]],\
"fedimint_derive_secret":["",[],["lib.rs"]],\
"fedimint_dummy_client":["",[],["lib.rs"]],\
"fedimint_dummy_common":["",[],["config.rs","db.rs","lib.rs"]],\
"fedimint_dummy_server":["",[],["lib.rs"]],\
"fedimint_ln_client":["",[],["lib.rs"]],\
"fedimint_ln_common":["",[["contracts",[],["incoming.rs","mod.rs","outgoing.rs"]]],["config.rs","db.rs","lib.rs"]],\
"fedimint_ln_server":["",[],["lib.rs"]],\
"fedimint_logging":["",[],["lib.rs"]],\
"fedimint_mint_client":["",[],["db.rs","input.rs","lib.rs","oob.rs","output.rs"]],\
"fedimint_mint_common":["",[],["common.rs","config.rs","db.rs","lib.rs"]],\
"fedimint_mint_server":["",[],["lib.rs"]],\
"fedimint_rocksdb":["",[],["lib.rs"]],\
"fedimint_server":["",[["config",[],["api.rs","distributedgen.rs","io.rs","mod.rs"]],["consensus",[],["debug.rs","interconnect.rs","mod.rs","server.rs"]],["net",[],["api.rs","connect.rs","framed.rs","mod.rs","peers.rs","queue.rs"]]],["db.rs","lib.rs","multiplexed.rs"]],\
"fedimint_sqlite":["",[],["lib.rs"]],\
"fedimint_testing":["",[["btc",[],["mock.rs","mod.rs","real.rs"]],["ln",[],["mock.rs","mod.rs","real.rs"]]],["db.rs","lib.rs"]],\
"fedimint_wallet_client":["",[],["lib.rs"]],\
"fedimint_wallet_common":["",[],["config.rs","db.rs","keys.rs","lib.rs","tweakable.rs","txoproof.rs"]],\
"fedimint_wallet_server":["",[],["lib.rs"]],\
"fedimintd":["",[],["distributed_gen.rs","fedimintd.rs","lib.rs","ui.rs"]],\
"fixtures":["",[],["fixtures.rs"]],\
"gateway_cli":["",[],["main.rs"]],\
"gateway_cln_extension":["",[],["cln_extension.rs"]],\
"gatewayd":["",[],["gatewayd.rs"]],\
"hkdf":["",[],["lib.rs"]],\
"ln_gateway":["",[["rpc",[],["mod.rs","rpc_client.rs","rpc_server.rs"]]],["actor.rs","client.rs","lib.rs","lnd.rs","lnrpc_client.rs","types.rs","utils.rs"]],\
"recoverytool":["",[],["main.rs"]],\
"tbs":["",[["serde_impl",[],["mod.rs","scalar.rs"]]],["hash.rs","lib.rs","poly.rs"]]\
}');
createSourceSidebar();
