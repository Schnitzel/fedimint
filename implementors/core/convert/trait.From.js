(function() {var implementors = {
"clientd":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"mint_client/enum.ClientError.html\" title=\"enum mint_client::ClientError\">ClientError</a>&gt; for <a class=\"enum\" href=\"clientd/enum.ClientdError.html\" title=\"enum clientd::ClientdError\">ClientdError</a>"]],
"fedimint":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"fedimint/epoch/struct.OutcomeHistory.html\" title=\"struct fedimint::epoch::OutcomeHistory\">OutcomeHistory</a>&gt; for <a class=\"struct\" href=\"fedimint/consensus/struct.ConsensusOutcomeConversion.html\" title=\"struct fedimint::consensus::ConsensusOutcomeConversion\">ConsensusOutcomeConversion</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"fedimint/transaction/enum.TransactionError.html\" title=\"enum fedimint::transaction::TransactionError\">TransactionError</a>&gt; for <a class=\"enum\" href=\"fedimint/consensus/enum.TransactionSubmissionError.html\" title=\"enum fedimint::consensus::TransactionSubmissionError\">TransactionSubmissionError</a>"]],
"fedimint_api":[["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"fedimint_api/db/batch/struct.Accumulator.html\" title=\"struct fedimint_api::db::batch::Accumulator\">Accumulator</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"fedimint_api/db/enum.DecodingError.html\" title=\"enum fedimint_api::db::DecodingError\">DecodingError</a>&gt; for ConflictableTransactionError&lt;<a class=\"enum\" href=\"fedimint_api/db/enum.DecodingError.html\" title=\"enum fedimint_api::db::DecodingError\">DecodingError</a>&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Hash&gt; for <a class=\"struct\" href=\"fedimint_api/struct.TransactionId.html\" title=\"struct fedimint_api::TransactionId\">TransactionId</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"fedimint_api/struct.TransactionId.html\" title=\"struct fedimint_api::TransactionId\">TransactionId</a>&gt; for Sha256"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/num/error/struct.ParseIntError.html\" title=\"struct core::num::error::ParseIntError\">ParseIntError</a>&gt; for <a class=\"enum\" href=\"fedimint_api/enum.ParseAmountError.html\" title=\"enum fedimint_api::ParseAmountError\">ParseAmountError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;ParseAmountError&gt; for <a class=\"enum\" href=\"fedimint_api/enum.ParseAmountError.html\" title=\"enum fedimint_api::ParseAmountError\">ParseAmountError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u16.html\">u16</a>&gt; for <a class=\"struct\" href=\"fedimint_api/struct.PeerId.html\" title=\"struct fedimint_api::PeerId\">PeerId</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"fedimint_api/struct.PeerId.html\" title=\"struct fedimint_api::PeerId\">PeerId</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u16.html\">u16</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Amount&gt; for <a class=\"struct\" href=\"fedimint_api/struct.Amount.html\" title=\"struct fedimint_api::Amount\">Amount</a>"]],
"fedimint_ln":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Hash&gt; for <a class=\"struct\" href=\"fedimint_ln/contracts/incoming/struct.OfferId.html\" title=\"struct fedimint_ln::contracts::incoming::OfferId\">OfferId</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"fedimint_ln/contracts/incoming/struct.OfferId.html\" title=\"struct fedimint_ln::contracts::incoming::OfferId\">OfferId</a>&gt; for Sha256"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Hash&gt; for <a class=\"struct\" href=\"fedimint_ln/contracts/struct.ContractId.html\" title=\"struct fedimint_ln::contracts::ContractId\">ContractId</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"fedimint_ln/contracts/struct.ContractId.html\" title=\"struct fedimint_ln::contracts::ContractId\">ContractId</a>&gt; for Sha256"]],
"fedimint_mint":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"fedimint_mint/struct.SignRequest.html\" title=\"struct fedimint_mint::SignRequest\">SignRequest</a>&gt; for <a class=\"struct\" href=\"fedimint_mint/tiered/tiered_multi/struct.TieredMulti.html\" title=\"struct fedimint_mint::tiered::tiered_multi::TieredMulti\">TieredMulti</a>&lt;<a class=\"struct\" href=\"fedimint_mint/struct.BlindNonce.html\" title=\"struct fedimint_mint::BlindNonce\">BlindNonce</a>&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"fedimint_mint/struct.InvalidAmountTierError.html\" title=\"struct fedimint_mint::InvalidAmountTierError\">InvalidAmountTierError</a>&gt; for <a class=\"enum\" href=\"fedimint_mint/enum.MintError.html\" title=\"enum fedimint_mint::MintError\">MintError</a>"]],
"fedimint_wallet":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"fedimint_wallet/keys/struct.CompressedPublicKey.html\" title=\"struct fedimint_wallet::keys::CompressedPublicKey\">CompressedPublicKey</a>&gt; for PublicKey"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/anyhow/1.0.59/anyhow/struct.Error.html\" title=\"struct anyhow::Error\">Error</a>&gt; for <a class=\"enum\" href=\"fedimint_wallet/enum.WalletError.html\" title=\"enum fedimint_wallet::WalletError\">WalletError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"fedimint_wallet/txoproof/enum.PegInProofError.html\" title=\"enum fedimint_wallet::txoproof::PegInProofError\">PegInProofError</a>&gt; for <a class=\"enum\" href=\"fedimint_wallet/enum.WalletError.html\" title=\"enum fedimint_wallet::WalletError\">WalletError</a>"]],
"ln_gateway":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"mint_client/enum.ClientError.html\" title=\"enum mint_client::ClientError\">ClientError</a>&gt; for <a class=\"enum\" href=\"ln_gateway/enum.LnGatewayError.html\" title=\"enum ln_gateway::LnGatewayError\">LnGatewayError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"mint_client/mint/enum.MintClientError.html\" title=\"enum mint_client::mint::MintClientError\">MintClientError</a>&gt; for <a class=\"enum\" href=\"ln_gateway/enum.LnGatewayError.html\" title=\"enum ln_gateway::LnGatewayError\">LnGatewayError</a>"]],
"mint_client":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"struct\" href=\"fedimint_core/config/struct.ClientConfig.html\" title=\"struct fedimint_core::config::ClientConfig\">ClientConfig</a>&gt; for <a class=\"struct\" href=\"mint_client/api/struct.WsFederationConnect.html\" title=\"struct mint_client::api::WsFederationConnect\">WsFederationConnect</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Error&gt; for <a class=\"enum\" href=\"mint_client/api/enum.ApiError.html\" title=\"enum mint_client::api::ApiError\">ApiError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"fedimint_core/enum.CoreError.html\" title=\"enum fedimint_core::CoreError\">CoreError</a>&gt; for <a class=\"enum\" href=\"mint_client/api/enum.ApiError.html\" title=\"enum mint_client::api::ApiError\">ApiError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"mint_client/api/enum.ApiError.html\" title=\"enum mint_client::api::ApiError\">ApiError</a>&gt; for <a class=\"enum\" href=\"mint_client/mint/enum.MintClientError.html\" title=\"enum mint_client::mint::MintClientError\">MintClientError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"mint_client/mint/enum.CoinFinalizationError.html\" title=\"enum mint_client::mint::CoinFinalizationError\">CoinFinalizationError</a>&gt; for <a class=\"enum\" href=\"mint_client/mint/enum.MintClientError.html\" title=\"enum mint_client::mint::MintClientError\">MintClientError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"fedimint_mint/struct.InvalidAmountTierError.html\" title=\"struct fedimint_mint::InvalidAmountTierError\">InvalidAmountTierError</a>&gt; for <a class=\"enum\" href=\"mint_client/mint/enum.CoinFinalizationError.html\" title=\"enum mint_client::mint::CoinFinalizationError\">CoinFinalizationError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"mint_client/api/enum.ApiError.html\" title=\"enum mint_client::api::ApiError\">ApiError</a>&gt; for <a class=\"enum\" href=\"mint_client/wallet/enum.WalletClientError.html\" title=\"enum mint_client::wallet::WalletClientError\">WalletClientError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"mint_client/struct.GatewayClientConfig.html\" title=\"struct mint_client::GatewayClientConfig\">GatewayClientConfig</a>&gt; for <a class=\"struct\" href=\"fedimint_ln/struct.LightningGateway.html\" title=\"struct fedimint_ln::LightningGateway\">LightningGateway</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"mint_client/api/enum.ApiError.html\" title=\"enum mint_client::api::ApiError\">ApiError</a>&gt; for <a class=\"enum\" href=\"mint_client/enum.ClientError.html\" title=\"enum mint_client::ClientError\">ClientError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"mint_client/wallet/enum.WalletClientError.html\" title=\"enum mint_client::wallet::WalletClientError\">WalletClientError</a>&gt; for <a class=\"enum\" href=\"mint_client/enum.ClientError.html\" title=\"enum mint_client::ClientError\">ClientError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"mint_client/mint/enum.MintClientError.html\" title=\"enum mint_client::mint::MintClientError\">MintClientError</a>&gt; for <a class=\"enum\" href=\"mint_client/enum.ClientError.html\" title=\"enum mint_client::ClientError\">ClientError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"mint_client/ln/enum.LnClientError.html\" title=\"enum mint_client::ln::LnClientError\">LnClientError</a>&gt; for <a class=\"enum\" href=\"mint_client/enum.ClientError.html\" title=\"enum mint_client::ClientError\">ClientError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;CreationError&gt; for <a class=\"enum\" href=\"mint_client/enum.ClientError.html\" title=\"enum mint_client::ClientError\">ClientError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/reqwest/0.11.11/reqwest/error/struct.Error.html\" title=\"struct reqwest::error::Error\">Error</a>&gt; for <a class=\"enum\" href=\"mint_client/enum.ClientError.html\" title=\"enum mint_client::ClientError\">ClientError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"fedimint_mint/struct.InvalidAmountTierError.html\" title=\"struct fedimint_mint::InvalidAmountTierError\">InvalidAmountTierError</a>&gt; for <a class=\"enum\" href=\"mint_client/enum.ClientError.html\" title=\"enum mint_client::ClientError\">ClientError</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()