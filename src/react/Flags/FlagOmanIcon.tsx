import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagOmanIcon = (
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
    <path fill='#fff' d='M2.009 0H2zM8 0v5h16V2a2 2 0 0 0-2-2z' />
    <path fill='#DF1A23' d='M8 11h16V5H8z' />
    <path
      fill='#007E3C'
      d='M.298 15.052C.651 15.62 1.281 16 2 16h.009c-.723 0-1.357-.38-1.71-.948M8 16h14a2 2 0 0 0 2-2v-3H8z'
    />
    <path
      fill='#DF1A23'
      fillRule='evenodd'
      d='M0 1.994C0 .893.902 0 2.009 0H8v16H2.009A2 2 0 0 1 0 14.006z'
      clipRule='evenodd'
    />
    <path
      fill='#F7FCFF'
      fillRule='evenodd'
      d='M5.93 1.045c.006-.045-.053-.063-.076-.023a19 19 0 0 1-1.385 2v-.46c-.071-.077-.299-.285-.299-.285v-.459l.412-.372-.566-.417-.596.417.45.372v.459c0 .22-.273.286-.273.286l-.05.404a19 19 0 0 1-1.315-1.925c-.023-.04-.083-.021-.076.025.055.37.222 1.187.68 2.06h-.123v-.016a.043.043 0 0 0-.043-.044H1.616a.043.043 0 0 0-.044.044v.663c0 .024.02.043.044.043H2.67a.043.043 0 0 0 .043-.043v-.348h.132a.3.3 0 0 0 .27.179q.126.195.275.389c-.229-.023-1.74-.152-1.74.398 0 .328.407.43.867.52L1.376 5.98c-.032.03-.007.08.036.07.36-.09 1.303-.527 2.201-1.14.253 0 .457.053.579-.095.913.745 1.946 1.09 2.395 1.213.047.013.072-.048.032-.075a13.5 13.5 0 0 1-2.026-1.745l.022-.026q.257-.304.451-.62a.3.3 0 0 0 .123-.137h.133v.348c0 .024.02.043.043.043H6.42a.043.043 0 0 0 .043-.043V3.11a.043.043 0 0 0-.043-.044H5.366a.05.05 0 0 0-.03.011 6.2 6.2 0 0 0 .595-2.033m-.608 2.082v-.02l-.01.02zm-1.956.182a.244.244 0 0 1-.245.242.243.243 0 0 1-.244-.242c0-.133.11-.242.245-.242s.244.109.244.242m1.304 0c0 .134.11.242.245.242a.243.243 0 0 0 .244-.242.244.244 0 0 0-.244-.242.243.243 0 0 0-.245.242'
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
const ForwardRef = forwardRef(FlagOmanIcon);
export default ForwardRef;
