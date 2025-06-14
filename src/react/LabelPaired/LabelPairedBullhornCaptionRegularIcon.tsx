import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBullhornCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.75 4.555a.191.191 0 0 0-.328-.14L8.859 5A7.2 7.2 0 0 1 5.25 7.063v4.148a7.04 7.04 0 0 1 3.61 2.062l.562.586c.117.118.328.024.328-.14zM4.5 11.094V7.18c-.14.023-.281.023-.422.047l-.703.023H1.5A.755.755 0 0 0 .75 8v2.25c0 .422.328.75.75.75h1.875l.703.047c.14 0 .281.023.422.047m4.383-7.196c.562-.609 1.617-.21 1.617.657v9.164c0 .844-1.055 1.265-1.617.656l-.563-.586a6.4 6.4 0 0 0-3.82-1.945v2.344A1.31 1.31 0 0 1 3.188 15.5h-.376A1.31 1.31 0 0 1 1.5 14.188V11.75a1.48 1.48 0 0 1-1.5-1.5V8c0-.82.656-1.5 1.5-1.5h1.852l.68-.023A6.36 6.36 0 0 0 8.32 4.484zM2.25 11.75v2.438c0 .328.234.562.563.562h.374a.555.555 0 0 0 .563-.562v-2.415l-.398-.023zM11.625 8c.188 0 .375.188.375.375v1.5c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375v-1.5c0-.187.164-.375.375-.375' />
    </g>
    <defs>
      <clipPath id='66d2392a17bb46cc25eb05a636f1da27__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBullhornCaptionRegularIcon);
export default ForwardRef;
