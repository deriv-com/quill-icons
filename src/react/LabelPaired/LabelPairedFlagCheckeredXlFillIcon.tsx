import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFlagCheckeredXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.5 6C2.297 6 3 6.703 3 7.5v.75l3.234-.797c1.782-.422 3.657-.234 5.297.61a7.75 7.75 0 0 0 6.89 0l.47-.235C19.828 7.36 21 8.062 21 9.141v13.078c0 .656-.422 1.218-.984 1.406l-1.641.61c-2.156.843-4.594.703-6.656-.329A8.34 8.34 0 0 0 6 23.25L3 24v4.5c0 .844-.703 1.5-1.5 1.5A1.48 1.48 0 0 1 0 28.5v-21C0 6.703.656 6 1.5 6M3 14.813l3-.657v3.047l-3 .656v3.047l2.25-.562c.234-.047.469-.094.75-.14v-3l1.781-.376c.422-.094.797-.14 1.219-.094v-3c.61 0 1.266.094 1.875.282l1.125.328v3.14l-1.969-.609A4 4 0 0 0 9 16.735v3.328c.984.093 2.016.328 3 .656v-3.235l1.031.282c.656.187 1.313.328 1.969.375v-3.047c-.375 0-.75-.094-1.125-.188L12 14.344v-2.906a15 15 0 0 1-1.828-.704A6 6 0 0 0 9 10.313v3.421q-.915-.07-1.828.141L6 14.156v-3.562l-3 .75zm12 6.937c.75.094 1.547-.047 2.344-.328l.656-.235v-3.375l-.375.094c-.89.188-1.781.282-2.625.235zm3-6.984v-3.328c-.984.28-2.016.421-3 .421v3.235c.61.094 1.313.047 1.922-.094z' />
    </g>
    <defs>
      <clipPath id='e5ff85a7c5ac376bfcc9f3dc6a125857__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFlagCheckeredXlFillIcon);
export default ForwardRef;
