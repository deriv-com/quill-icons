import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPasskeyXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.11 27.281v-3.703c0-.703.187-1.36.609-1.969.375-.609.843-1.078 1.5-1.406 1.078-.515 2.156-.937 3.328-1.219a16.6 16.6 0 0 1 3.422-.375h1.078l1.125.141a5.9 5.9 0 0 0 .562 3.094c.516.937 1.22 1.734 2.11 2.297v3.14zm17.437 2.39-1.688-1.64v-5.11c-.797-.233-1.453-.702-1.968-1.358-.516-.704-.75-1.454-.75-2.344 0-1.078.375-1.969 1.125-2.719s1.64-1.125 2.718-1.125 1.97.375 2.72 1.125a3.76 3.76 0 0 1 1.124 2.719c0 .843-.234 1.547-.656 2.203-.469.61-1.031 1.078-1.781 1.36l1.359 1.406-1.687 1.64 1.687 1.64zm-8.578-12.093c-1.313 0-2.485-.469-3.422-1.406-.938-.938-1.406-2.11-1.406-3.422 0-1.36.468-2.484 1.406-3.422.937-.937 2.11-1.406 3.422-1.406 1.36 0 2.484.469 3.422 1.406.984.938 1.453 2.11 1.453 3.422s-.469 2.484-1.453 3.422c-.938.937-2.063 1.406-3.422 1.406m8.015 2.203c.422 0 .797-.187 1.032-.515a1.29 1.29 0 0 0 0-1.172c-.235-.328-.61-.563-1.032-.516-.422-.047-.797.188-1.03.516a1.29 1.29 0 0 0 0 1.172c.233.328.608.515 1.03.515' />
    </g>
    <defs>
      <clipPath id='250f86922c6672c1b1ce387bfc686dd8__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPasskeyXlFillIcon);
export default ForwardRef;
