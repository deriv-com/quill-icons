import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleStarCaptionFillIcon = (
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
      <path d='M0 9.5a5.96 5.96 0 0 1 3-5.18 5.97 5.97 0 0 1 6 0 6 6 0 0 1 3 5.18 6.01 6.01 0 0 1-3 5.203 5.97 5.97 0 0 1-6 0A5.97 5.97 0 0 1 0 9.5m6-3.562a.4.4 0 0 0-.352.21l-.843 1.735-1.899.281c-.14 0-.258.117-.304.234-.047.141 0 .305.093.399l1.383 1.336-.328 1.898c-.023.14.023.281.14.352a.41.41 0 0 0 .4.047L6 11.54l1.688.89a.41.41 0 0 0 .398-.047c.117-.07.164-.211.14-.352l-.304-1.898 1.36-1.336a.33.33 0 0 0 .093-.375.38.38 0 0 0-.305-.258l-1.898-.281-.844-1.735A.37.37 0 0 0 6 5.961z' />
    </g>
    <defs>
      <clipPath id='6ad3201bf88b864036c51f2f355ec4e7__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleStarCaptionFillIcon);
export default ForwardRef;
