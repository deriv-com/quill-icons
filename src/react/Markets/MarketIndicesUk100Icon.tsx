import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketIndicesUk100Icon = (
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
      fill='#0D47A1'
      d='M4 10a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z'
    />
    <path
      fill='#fff'
      d='M4 10a2 2 0 0 1 2-2h1.606L14 12.263V8h4v4.263L24.395 8H26a2 2 0 0 1 2 2v.404L22.606 14H28v4h-5.394L28 21.596V22a2 2 0 0 1-2 2h-1.606L18 19.737V24h-4v-4.263L7.606 24H6a2 2 0 0 1-2-2v-.404L9.394 18H4v-4h5.394L4 10.404z'
    />
    <path fill='#F44336' d='M14.759 8v6.726H4v2.522h10.759V24h2.482v-6.752H28v-2.522H17.241V8z' />
    <path
      fill='#F44336'
      d='m26.764 8.151-8.695 5.734h1.52l7.906-5.213c-.2-.225-.449-.404-.73-.52M27.72 23.023l-7.483-4.934h-1.52l8.423 5.554c.235-.163.433-.375.58-.62M5.198 23.833l8.71-5.744h-1.52l-7.906 5.213c.194.227.439.41.716.53M4.243 9.044l7.34 4.841h1.52l-8.31-5.48a2 2 0 0 0-.55.64'
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
      d='M13 2a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H15a2 2 0 0 1-2-2z'
    />
    <path
      fill='#fff'
      d='M16.057 8v-.968h1.504V3.288h-.072l-1.136 1.488-.768-.6 1.336-1.76h1.84v4.616h1.184V8zM22.502 8.096q-1.096 0-1.624-.76t-.528-2.128.528-2.128 1.624-.76 1.624.76.528 2.128-.528 2.128q-.529.76-1.624.76m0-1.016q.479 0 .664-.352.183-.352.184-.992V4.68q0-.64-.184-.992t-.664-.352-.664.352-.184.992v1.056q-.001.64.184.992.184.352.664.352M27.298 8.096q-1.095 0-1.624-.76-.528-.76-.528-2.128t.528-2.128q.529-.76 1.624-.76t1.624.76.528 2.128-.528 2.128-1.624.76m0-1.016q.48 0 .664-.352t.184-.992V4.68q.001-.64-.184-.992-.184-.352-.664-.352-.479 0-.664.352-.184.352-.184.992v1.056q0 .64.184.992t.664.352'
    />
  </svg>
);
const ForwardRef = forwardRef(MarketIndicesUk100Icon);
export default ForwardRef;
