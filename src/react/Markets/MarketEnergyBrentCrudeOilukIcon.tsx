import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketEnergyBrentCrudeOilukIcon = (
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
    <g clipPath='url(#769088e68cdb0f7741c1c3427b56ea39__a)'>
      <path
        fill='#282C38'
        d='M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16'
      />
      <path
        fill='#fff'
        d='M10.286 12.091c1.338.874 3.637 1.223 5.714 1.223s4.375-.349 5.714-1.223v3.05c.235.22.372.523.381.844 0 1.504-3.066 2.29-6.095 2.29s-6.095-.786-6.095-2.29c.01-.32.147-.625.38-.844z'
      />
      <path
        fill='#fff'
        d='M16 19.039c-2.077 0-4.376-.349-5.714-1.223v3.05c-.234.22-.372.523-.381.844C9.905 23.213 12.97 24 16 24s6.095-.787 6.095-2.29a1.2 1.2 0 0 0-.38-.844v-3.05c-1.34.874-3.638 1.223-5.715 1.223'
      />
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M14.988 8v2.46c0 .83.672 1.503 1.5 1.503h3.714c-1.147.389-2.68.588-4.202.588-3.03 0-6.095-.787-6.095-2.29 0-1.336 2.42-2.106 5.083-2.261m-1.655 1.879h-.762a.381.381 0 0 0 0 .763h.762a.381.381 0 0 0 0-.763'
        clipRule='evenodd'
      />
      <path
        fill='#282C38'
        d='M14.98 6.47a1.5 1.5 0 0 1 1.5-1.5h7.002a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5H16.48a1.5 1.5 0 0 1-1.5-1.5z'
      />
      <path
        fill='#0D47A1'
        d='M15.48 6.22a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75z'
      />
      <path
        fill='#fff'
        d='M15.48 6.22a.75.75 0 0 1 .75-.75h.602L19.23 7.07V5.47h1.5V7.07l2.398-1.599h.602a.75.75 0 0 1 .75.75v.152L22.457 7.72h2.023v1.5h-2.023l2.023 1.349v.151a.75.75 0 0 1-.75.75h-.602L20.73 9.872v1.598h-1.5V9.872l-2.398 1.598h-.602a.75.75 0 0 1-.75-.75v-.151l2.023-1.349H15.48v-1.5h2.023L15.48 6.372z'
      />
      <path
        fill='#F44336'
        d='M19.515 5.47v2.522H15.48v.946h4.035v2.532h.93V8.938h4.035v-.946h-4.035V5.47z'
      />
      <path
        fill='#F44336'
        d='m24.017 5.527-3.261 2.15h.57l2.965-1.955a.75.75 0 0 0-.274-.195M24.375 11.104l-2.806-1.85h-.57l3.159 2.082a.75.75 0 0 0 .217-.232M15.93 11.407l3.266-2.154h-.57L15.66 11.21a.75.75 0 0 0 .268.198M15.571 5.862l2.753 1.815h.57l-3.117-2.055a.8.8 0 0 0-.206.24'
      />
      <path
        fill='#000'
        fillOpacity={0.08}
        fillRule='evenodd'
        d='M23.73 5.845h-7.5a.375.375 0 0 0-.375.375v4.5c0 .207.168.375.375.375h7.5a.375.375 0 0 0 .375-.375v-4.5a.375.375 0 0 0-.375-.375m-7.5-.375a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h7.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75z'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='769088e68cdb0f7741c1c3427b56ea39__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketEnergyBrentCrudeOilukIcon);
export default ForwardRef;
