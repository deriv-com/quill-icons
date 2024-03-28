import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLinkedinMdIcon = (
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
      <path d='M13 5c.531 0 1 .469 1 1.031V18c0 .563-.469 1-1 1H.969A.98.98 0 0 1 0 18V6.031C0 5.47.438 5 .969 5zM4.219 17v-6.656H2.156V17zM3.187 9.406c.657 0 1.188-.531 1.188-1.187S3.844 7 3.188 7a1.22 1.22 0 0 0-1.22 1.219c0 .656.532 1.187 1.22 1.187M12 17v-3.656c0-1.781-.406-3.188-2.5-3.188-1 0-1.687.563-1.969 1.094H7.5v-.906H5.531V17h2.063v-3.281c0-.875.156-1.719 1.25-1.719 1.062 0 1.062 1 1.062 1.75V17z' />
    </g>
    <defs>
      <clipPath id='57407018b636514a1423182d665a5d86__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLinkedinMdIcon);
export default ForwardRef;
