import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDollarSignLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.438 6.438v1.914q1.64.195 2.812.507.82.274.664 1.133-.273.82-1.094.703-.937-.235-2.148-.43-1.172-.156-2.305-.078-1.132.08-1.797.508-.585.352-.78 1.172-.119.664.077.977.157.312.664.664 1.172.625 3.203 1.094h.079q.938.234 1.875.546a7.1 7.1 0 0 1 1.757.743q.86.507 1.367 1.445.47.938.235 2.148-.508 2.07-2.5 2.735a6.2 6.2 0 0 1-2.11.43v1.913q-.078.86-.937.938-.86-.079-.937-.937v-1.954h-.196a.43.43 0 0 0-.195-.039 18 18 0 0 1-1.836-.39q-1.094-.273-1.914-.625-.742-.39-.469-1.211.43-.781 1.25-.508.664.312 1.602.547.938.234 1.64.351 2.11.274 3.399-.234 1.21-.507 1.367-1.367.117-.664-.078-.977-.156-.312-.664-.664-1.172-.624-3.203-1.094h-.079a25 25 0 0 1-1.875-.546 7.1 7.1 0 0 1-1.757-.743 3.66 3.66 0 0 1-1.368-1.445q-.468-.937-.234-2.148.352-1.64 1.64-2.422a5.8 5.8 0 0 1 2.618-.781h.351V6.437q.079-.859.938-.937.859.078.938.938' />
    </g>
    <defs>
      <clipPath id='32ca9da82b565361563e1ece722348ae__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDollarSignLgBoldIcon);
export default ForwardRef;
