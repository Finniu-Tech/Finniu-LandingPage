"use server";
import { CALCULATE_INVESTMENT } from "../../graphql/mutation";
import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient("https://www.finniu.com/api/v1/graph/finniu/");

export type InvestmentResult = {
  success: boolean;
  investmentTotalAmount?: number;
};

export async function calculateInvestment(input: {
  ammount: number;
  deadline: number;
  currency: string;
}): Promise<InvestmentResult> {
  try {
    console.log('calculateInvestment input', input);
    const parameters = {
      ammount: input.ammount,
      deadline: input.deadline,
      currency: input.currency,
    };

    const result: any = await client.request(CALCULATE_INVESTMENT, parameters);
    console.log('result', result);

    const investmentData = result.calculateInvestment;
    

    return {
      success: investmentData.success,
      investmentTotalAmount: investmentData.profitability.preInvestmentAmount,
    };
  } catch (error) {
    console.log('error calculateInvestment', error);
    return {
      success: false,
    };
  }
}
