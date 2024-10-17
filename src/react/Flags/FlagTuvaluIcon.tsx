import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagTuvaluIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path fill='#009CDE' d='M12 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8h12z' />
    <path fill='#042C90' d='M0 8h12V0H2a2 2 0 0 0-2 2z' />
    <path
      fill='#fff'
      d='M5 0v2.131L1.815.008C1.042.08.396.59.13 1.288L2.697 3H0v2h2.697L0 6.798V8h1.803L5 5.869V8h2V5.869L10.197 8H12V6.798L9.303 5H12V3H9.303L12 1.202V0h-1.803L7 2.131V0z'
    />
    <path fill='#F44336' d='M5.5 0v3.5H0v1h5.5V8h1V4.5H12v-1H6.5V0z' />
    <path
      fill='#F44336'
      d='m11.55 0-4.5 3h.9L12 .3V0zM0 8h.45l4.5-3h-.9L0 7.7zM.524.65 4.05 3h.902L.923.315A2 2 0 0 0 .524.65M7.95 5 12 7.7V8h-.45l-4.5-3z'
    />
    <path
      fill='#FEDD00'
      fillRule='evenodd'
      d='m21.8 2.934-.584.308.111-.652-.473-.46.654-.095.293-.593.292.592.654.095-.473.462.112.65M21.8 9.492l-.584.308.111-.652-.473-.46.654-.095.293-.593.292.592.654.095-.473.462.112.651M19.771 10.953l-.585.308.112-.652-.473-.46.654-.095.292-.593.293.592.654.095-.474.462.112.65M19.771 3.55l.585-.308-.112.652.474.46-.654.095-.293.593-.292-.592-.654-.096.473-.461-.112-.651M17.742 4.307 18.327 4l-.112.652.474.46-.655.095-.292.593-.293-.593-.654-.095.474-.461L17.157 4M17.742 11.569l.585-.308-.112.652.474.46-.655.095-.292.593-.293-.592-.654-.095.474-.462-.112-.651M15.529 12.333l.585-.307-.112.651.473.46-.654.096-.292.593-.293-.593-.654-.095.473-.461-.111-.651M15.529 9.769l.585-.308-.112.652.474.46-.654.095-.293.593-.293-.592-.654-.095.474-.462-.112-.651M13.18 14.014l-.585.308.111-.652-.473-.46.654-.096.293-.593.292.593.654.095-.473.462.112.65'
      clipRule='evenodd'
    />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagTuvaluIcon);
export default ForwardRef;
