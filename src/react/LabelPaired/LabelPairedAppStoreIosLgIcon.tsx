import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedAppStoreIosLgIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M15.875 6.75q.78.039 1.328.547.508.546.547 1.328v13.75q-.039.78-.547 1.328-.546.508-1.328.547H2.125a2.04 2.04 0 0 1-1.328-.547 2.04 2.04 0 0 1-.547-1.328V8.625q.039-.781.547-1.328.546-.508 1.328-.547zM5.211 20.54l.742-1.33q-.585-.741-1.523-.429l-.586.977q-.274.624.312 1.055.625.272 1.055-.274m5.43-2.11a1.16 1.16 0 0 0-.04-1.055q-.234-.469-.859-.508H7.32l3.36-5.82q.312-.664-.274-1.055-.663-.312-1.094.274l-.351.586-.313-.586q-.429-.586-1.093-.274-.586.39-.274 1.055l.782 1.367-2.54 4.453H3.531q-.703.04-.781.781.079.704.781.782zm3.828 0q.703-.078.781-.782-.078-.742-.781-.78h-2.031a924 924 0 0 1-1.993-3.438 5 5 0 0 0-.312-.547q-.39.313-.547 1.015-.196.743.273 1.602.547.938 1.368 2.383.663 1.171 1.523 2.656.43.547 1.055.273.586-.43.312-1.054l-.781-1.328z' />
    </g>
    <defs>
      <clipPath id='8149b928f58d5515091ce9f0b5e104d8__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAppStoreIosLgIcon);
export default ForwardRef;
