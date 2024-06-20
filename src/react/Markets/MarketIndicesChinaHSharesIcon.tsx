import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketIndicesChinaHSharesIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#F1361D'
      fillRule='evenodd'
      d='M6 8h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2m6.893 2.861-.5-.455-.114.666-.455.5.667.114.5.455.113-.666.455-.5zm1.634 1.453-.016.676.351.577-.675-.015-.578.351.016-.676-.352-.577.676.015zm-.38 2.637-.605-.3.074.672-.3.606.672-.075.606.3-.074-.672.3-.606zm-1.017 2.152-.008-.676-.565.372-.675.008.37.565.009.675.565-.37.676-.009zM9.48 15.1l-1.618 1.154.597-1.895-1.597-1.183 1.987-.017.631-1.884.631 1.884 1.987.018-1.597 1.182.597 1.895z'
      clipRule='evenodd'
    />
    <path
      fill='#FFDC42'
      d='m13.13 17.103-.008-.676-.565.372-.675.008.37.565.009.675.565-.37.676-.009zM14.148 14.95l-.606-.3.074.673-.3.606.672-.075.606.3-.074-.672.3-.606zM14.511 12.99l.016-.676-.578.351-.676-.015.352.577-.016.676.578-.351.675.015zM12.893 10.861l-.5-.455-.114.666-.455.5.667.114.5.455.113-.666.455-.5zM7.862 16.253 9.48 15.1l1.618 1.153-.597-1.895 1.597-1.183-1.987-.017-.63-1.884-.632 1.884-1.987.018 1.597 1.182z'
    />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M26 9H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1M6 8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2z'
      clipRule='evenodd'
    />
    <path
      fill='#414652'
      d='M16 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H18a2 2 0 0 1-2-2z'
    />
    <path
      fill='#fff'
      d='M22.28 5.712h-2.128V8h-1.216V2.416h1.216V4.64h2.128V2.416h1.216V8H22.28zM26.67 5.568l-.729.88V8h-1.216V2.416h1.216v2.656h.048l.792-1.08 1.256-1.576h1.376l-1.88 2.296L29.581 8H28.15z'
    />
  </svg>
);
const ForwardRef = forwardRef(MarketIndicesChinaHSharesIcon);
export default ForwardRef;
