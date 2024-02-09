import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedAppStoreIosCaptionIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.625 4.25q.469.024.797.328.304.328.328.797v8.25a1.22 1.22 0 0 1-.328.797 1.22 1.22 0 0 1-.797.328h-8.25a1.22 1.22 0 0 1-.797-.328 1.22 1.22 0 0 1-.328-.797v-8.25q.024-.468.328-.797.329-.304.797-.328zm-6.398 8.273.445-.796q-.353-.446-.914-.258l-.352.586q-.165.374.188.633.374.163.633-.165m3.257-1.265a.7.7 0 0 0-.023-.633q-.141-.281-.516-.305H4.492l2.016-3.492q.187-.398-.164-.633-.399-.187-.657.164l-.21.352-.188-.352q-.257-.351-.656-.164-.353.235-.164.633l.468.82-1.523 2.672H2.22q-.422.023-.469.47.047.42.469.468zm2.297 0q.422-.047.469-.469-.046-.445-.469-.469H7.562q-.75-1.29-1.195-2.062a3 3 0 0 0-.187-.328q-.235.187-.328.61-.118.444.164.96.327.563.82 1.43.399.703.914 1.593.258.33.633.165.351-.258.187-.633l-.468-.797z' />
    </g>
    <defs>
      <clipPath id='97b2a0dacea76970be31fd564c5f296b__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAppStoreIosCaptionIcon);
export default ForwardRef;
