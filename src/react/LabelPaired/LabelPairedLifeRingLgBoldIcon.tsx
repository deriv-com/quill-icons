import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLifeRingLgBoldIcon = (
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
      <path d='m15.04 21.906-3.165-3.164c-.547.352-1.21.508-1.875.508-.703 0-1.367-.156-1.914-.508l-3.164 3.164C6.328 23 8.086 23.625 10 23.625a8.2 8.2 0 0 0 5.04-1.719m2.655 0 .43.469c.39.352.39.938 0 1.29a.856.856 0 0 1-1.29 0l-.468-.43C14.61 24.64 12.422 25.5 10 25.5c-2.46 0-4.648-.86-6.406-2.266l-.469.43a.856.856 0 0 1-1.29 0c-.39-.352-.39-.937 0-1.328l.43-.43C.86 20.148 0 17.961 0 15.5c0-2.422.86-4.61 2.266-6.367l-.43-.469c-.39-.351-.39-.937 0-1.328.351-.352.937-.352 1.328 0l.43.469C5.352 6.398 7.539 5.5 10 5.5c2.422 0 4.61.898 6.367 2.305l.469-.43c.352-.39.937-.39 1.328 0a.92.92 0 0 1 0 1.29l-.469.468C19.102 10.89 20 13.078 20 15.5c0 2.46-.898 4.648-2.305 6.406m-1.328-1.328a8.25 8.25 0 0 0 1.758-5.078c0-1.875-.664-3.633-1.758-5.04l-3.164 3.165c.352.547.547 1.21.547 1.875 0 .703-.195 1.367-.547 1.914zM15.04 9.133C13.633 8.039 11.875 7.375 10 7.375a8.25 8.25 0 0 0-5.078 1.758l3.164 3.164a3.5 3.5 0 0 1 1.875-.547c.703 0 1.367.195 1.914.547zm-8.281 8.281c-.352-.547-.508-1.21-.508-1.875 0-.703.156-1.367.508-1.914l-3.164-3.164A8.2 8.2 0 0 0 1.875 15.5c0 1.914.625 3.672 1.719 5.078zM8.125 15.5c0 .703.352 1.29.938 1.64.546.352 1.289.352 1.874 0 .547-.35.938-.937.938-1.64 0-.664-.39-1.25-.937-1.602-.586-.351-1.329-.351-1.876 0-.585.352-.937.938-.937 1.602' />
    </g>
    <defs>
      <clipPath id='fc445e633f522223fed8e8562f8f0cfc__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLifeRingLgBoldIcon);
export default ForwardRef;
