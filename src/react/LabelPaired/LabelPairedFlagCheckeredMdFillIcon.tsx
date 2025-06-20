import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFlagCheckeredMdFillIcon = (
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
      <path d='M1 4c.531 0 1 .469 1 1v.5l2.156-.531c1.188-.282 2.438-.157 3.532.406a5.16 5.16 0 0 0 4.593 0l.313-.156c.625-.313 1.406.156 1.406.875v8.718a.99.99 0 0 1-.656.938l-1.094.406a5.5 5.5 0 0 1-4.437-.218A5.56 5.56 0 0 0 4 15.5L2 16v3c0 .563-.469 1-1 1-.562 0-1-.437-1-1V5c0-.531.438-1 1-1m1 5.875 2-.437v2.03l-2 .438v2.031l1.5-.374c.156-.032.313-.063.5-.094v-2l1.188-.25c.28-.063.53-.094.812-.063v-2c.406 0 .844.063 1.25.188l.75.219v2.093l-1.312-.406A2.6 2.6 0 0 0 6 11.156v2.219a9.2 9.2 0 0 1 2 .438v-2.157l.688.188c.437.125.874.219 1.312.25v-2.031c-.25 0-.5-.063-.75-.126L8 9.564V7.625a10 10 0 0 1-1.219-.469A4 4 0 0 0 6 6.875v2.281a4 4 0 0 0-1.219.094L4 9.438V7.062l-2 .5zm8 4.625c.5.063 1.031-.031 1.563-.219l.437-.156v-2.25l-.25.063a6.8 6.8 0 0 1-1.75.156zm2-4.656V7.625a7.4 7.4 0 0 1-2 .281v2.157c.406.062.875.03 1.281-.063z' />
    </g>
    <defs>
      <clipPath id='b4ff23fe9b042d71e871487854a624cf__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFlagCheckeredMdFillIcon);
export default ForwardRef;
