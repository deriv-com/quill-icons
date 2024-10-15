import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagCookIslandsIcon = (
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
    <path
      fill='#000089'
      d='M22 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2'
    />
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
      fill='#fff'
      d='m17.39 3.239.62-.181.62.181-.182-.62.181-.619-.62.181L17.39 2l.182.62zM17.39 12l.62-.181.62.181-.182-.62.181-.619-.62.182-.619-.182.182.62zM22.39 7.438l-.62.182.182-.62-.181-.62.62.182.619-.182-.182.62.182.62zM13.01 7.62l.62-.182.619.182-.182-.62.182-.62-.62.182-.62-.182.182.62zM21.803 5.248l-.62.181.182-.62-.181-.619.62.182.619-.182-.182.62.182.62zM13.597 9.81l.62-.182.619.182-.182-.62.182-.62-.62.182-.62-.181.182.62zM20.2 3.644l-.62.182.182-.62-.181-.62.619.182.62-.181-.182.62.181.619zM15.2 11.413l.62-.181.619.181-.181-.62.181-.619-.62.182-.619-.182.181.62zM21.803 9.628l-.62.182.182-.62-.181-.62.62.182.619-.181-.182.62.182.619zM13.597 5.43l.62-.182.619.181-.182-.62.182-.619-.62.182-.62-.182.182.62zM20.2 11.232l-.62.181.182-.62-.181-.619.619.182.62-.182-.182.62.181.62zM15.2 3.826l.62-.182.619.182-.181-.62.181-.62-.62.182-.619-.181.181.62z'
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
const ForwardRef = forwardRef(FlagCookIslandsIcon);
export default ForwardRef;