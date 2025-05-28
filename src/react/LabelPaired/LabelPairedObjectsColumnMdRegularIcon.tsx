import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedObjectsColumnMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.5 6c-.281 0-.5.25-.5.5v5c0 .281.219.5.5.5h3c.25 0 .5-.219.5-.5v-5c0-.25-.25-.5-.5-.5zM0 6.5A1.5 1.5 0 0 1 1.5 5h3C5.313 5 6 5.688 6 6.5v5A1.5 1.5 0 0 1 4.5 13h-3A1.48 1.48 0 0 1 0 11.5zM9.5 12c-.281 0-.5.25-.5.5v5c0 .281.219.5.5.5h3c.25 0 .5-.219.5-.5v-5c0-.25-.25-.5-.5-.5zm-1.5.5A1.5 1.5 0 0 1 9.5 11h3c.813 0 1.5.688 1.5 1.5v5a1.5 1.5 0 0 1-1.5 1.5h-3A1.48 1.48 0 0 1 8 17.5zM4.5 15h-3c-.281 0-.5.25-.5.5v2c0 .281.219.5.5.5h3c.25 0 .5-.219.5-.5v-2c0-.25-.25-.5-.5-.5m-3-1h3c.813 0 1.5.688 1.5 1.5v2A1.5 1.5 0 0 1 4.5 19h-3A1.48 1.48 0 0 1 0 17.5v-2A1.5 1.5 0 0 1 1.5 14m8-8c-.281 0-.5.25-.5.5v2c0 .281.219.5.5.5h3c.25 0 .5-.219.5-.5v-2c0-.25-.25-.5-.5-.5zM8 6.5A1.5 1.5 0 0 1 9.5 5h3c.813 0 1.5.688 1.5 1.5v2a1.5 1.5 0 0 1-1.5 1.5h-3A1.48 1.48 0 0 1 8 8.5z' />
    </g>
    <defs>
      <clipPath id='6834dfa2f5d28df8aa5971236fb6a03a__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedObjectsColumnMdRegularIcon);
export default ForwardRef;
