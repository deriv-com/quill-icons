import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTakeProfitMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.469 16.719v-6.75h2.25V7.344H2.375v2.625h2.25v6.75zm2.5-9.375h4.469c.437 0 .874.093 1.25.25.374.156.687.375.968.656.282.281.469.625.625 1.031.125.375.188.813.188 1.25s-.063.875-.188 1.25a3.1 3.1 0 0 1-.625 1.031c-.281.282-.593.5-.968.657-.376.156-.813.219-1.25.219h-1.626v3.03H9.97zM14.5 10c-.031-.031-.094-.062-.281-.062h-1.406v1.187h1.406c.187 0 .281-.062.312-.094.031-.031.063-.062.063-.25v-.531c0-.156-.031-.219-.063-.219z' />
    </g>
    <defs>
      <clipPath id='caf987a505f6257748a4940e9d7f83cb__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTakeProfitMdFillIcon);
export default ForwardRef;
