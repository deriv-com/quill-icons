import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileShieldMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10 19h.094c.25.281.531.531.844.781-.282.157-.626.25-.938.25H2c-1.125 0-2-.906-2-2V6c0-1.094.875-2 2-2h4.875c.375 0 .781.188 1.063.469l3.593 3.593c.281.282.469.688.469 1.063v1.344l-1 .406V10H7.5A1.48 1.48 0 0 1 6 8.5V5H2c-.562 0-1 .469-1 1v12c0 .563.438 1 1 1zm.969-10c-.031-.062-.063-.156-.125-.219L7.219 5.156c-.063-.062-.157-.093-.219-.125V8.5c0 .281.219.5.5.5zM10 13.438c.031 1.656.688 4.03 3 5.312v-6.531zm7 0-3-1.22v6.532c2.281-1.281 2.938-3.656 2.969-5.312zm-3.219-2.376 3.75 1.5a.78.78 0 0 1 .469.688c0 2-.812 5.281-4.219 6.719a.97.97 0 0 1-.594 0C9.782 18.53 9 15.25 9 13.25a.78.78 0 0 1 .469-.687l3.75-1.5a.78.78 0 0 1 .531 0z' />
    </g>
    <defs>
      <clipPath id='7c7cda38dba38a23ea58d7d2423c63f2__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileShieldMdRegularIcon);
export default ForwardRef;
