import { Code } from 'lucide-react';

export default function DataEngineeringDetails() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-900 rounded-xl p-8 text-white">
        <h3 className="text-xl font-semibold mb-4">Azure Synapse Pipeline Example</h3>
        <pre className="overflow-x-auto">
          <code>{`{
  "name": "IncrementalLoadPipeline",
  "properties": {
    "activities": [
      {
        "name": "GetChangeData",
        "type": "Lookup",
        "policy": {
          "timeout": "7.00:00:00",
          "retry": 3
        },
        "typeProperties": {
          "source": {
            "type": "AzureSqlSource",
            "sqlReaderQuery": "SELECT * FROM [CDC].[fn_cdc_get_all_changes_dbo_customers]"
          }
        }
      },
      {
        "name": "TransformData",
        "type": "DataFlow",
        "dependsOn": [
          {
            "activity": "GetChangeData",
            "dependencyConditions": ["Succeeded"]
          }
        ],
        "policy": {
          "timeout": "1.00:00:00",
          "retry": 3
        },
        "typeProperties": {
          "dataflow": {
            "referenceName": "CustomerChangeDataFlow",
            "type": "DataFlowReference"
          }
        }
      }
    ]
  }
}`}</code>
        </pre>
      </div>

      <div className="bg-gray-900 rounded-xl p-8 text-white">
        <h3 className="text-xl font-semibold mb-4">Delta Lake Table Configuration</h3>
        <pre className="overflow-x-auto">
          <code>{`-- Delta Lake table creation with optimized settings
CREATE TABLE customers_delta
USING DELTA
LOCATION '/mnt/datalake/silver/customers'
TBLPROPERTIES (
  'delta.autoOptimize.optimizeWrite' = 'true',
  'delta.autoOptimize.autoCompact' = 'true',
  'delta.enableChangeDataFeed' = 'true'
)
AS SELECT * FROM customers_raw;

-- Optimize table layout
OPTIMIZE customers_delta
ZORDER BY (customer_id, last_update);`}</code>
        </pre>
      </div>
    </div>
  );
}