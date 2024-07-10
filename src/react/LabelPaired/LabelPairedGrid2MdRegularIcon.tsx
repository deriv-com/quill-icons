import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGrid2MdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.5 6c-.281 0-.5.25-.5.5v3c0 .281.219.5.5.5h3c.25 0 .5-.219.5-.5v-3c0-.25-.25-.5-.5-.5zM1 6.5A1.5 1.5 0 0 1 2.5 5h3C6.313 5 7 5.688 7 6.5v3A1.5 1.5 0 0 1 5.5 11h-3A1.48 1.48 0 0 1 1 9.5zM2.5 14c-.281 0-.5.25-.5.5v3c0 .281.219.5.5.5h3c.25 0 .5-.219.5-.5v-3c0-.25-.25-.5-.5-.5zm-1.5.5A1.5 1.5 0 0 1 2.5 13h3c.813 0 1.5.688 1.5 1.5v3A1.5 1.5 0 0 1 5.5 19h-3A1.48 1.48 0 0 1 1 17.5zM13.5 6h-3c-.281 0-.5.25-.5.5v3c0 .281.219.5.5.5h3c.25 0 .5-.219.5-.5v-3c0-.25-.25-.5-.5-.5m-3-1h3c.813 0 1.5.688 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.48 1.48 0 0 1 9 9.5v-3A1.5 1.5 0 0 1 10.5 5m0 9c-.281 0-.5.25-.5.5v3c0 .281.219.5.5.5h3c.25 0 .5-.219.5-.5v-3c0-.25-.25-.5-.5-.5zm-1.5.5a1.5 1.5 0 0 1 1.5-1.5h3c.813 0 1.5.688 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.48 1.48 0 0 1 9 17.5z' />
    </g>
    <defs>
      <clipPath id='531eec01e274e25e4f8bfeb2a9b51d56__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGrid2MdRegularIcon);
export default ForwardRef;
