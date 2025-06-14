import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedShieldCheckLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.852 10.46c-.235.118-.352.313-.352.509 0 3.594 1.484 9.726 7.266 12.5a.42.42 0 0 0 .43 0c5.78-2.735 7.265-8.907 7.304-12.5 0-.196-.156-.39-.352-.508L10 7.453zm15-1.718c.859.39 1.523 1.211 1.523 2.227-.04 3.906-1.64 10.976-8.36 14.219a2.4 2.4 0 0 1-2.07 0C2.227 21.945.625 14.875.625 10.968c-.04-1.015.625-1.835 1.484-2.226l7.344-3.125a1.25 1.25 0 0 1 1.055 0zm-5.664 4.883c0 .898-.547 1.64-1.25 1.992v2.695c0 .547-.43.938-.938.938-.547 0-.937-.39-.937-.937v-2.696a2.18 2.18 0 0 1-1.25-1.992c0-1.172.976-2.187 2.187-2.187 1.172 0 2.188 1.015 2.188 2.187' />
    </g>
    <defs>
      <clipPath id='d99d3bf881faeb476f5984ce95b71b95__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedShieldCheckLgBoldIcon);
export default ForwardRef;
