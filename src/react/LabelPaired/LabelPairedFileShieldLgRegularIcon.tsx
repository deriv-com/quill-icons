import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileShieldLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.75 24.25h.156q.469.507 1.016.977-.509.273-1.172.273h-10q-1.055-.039-1.758-.742Q.29 24.054.25 23V8q.039-1.055.742-1.758T2.75 5.5h6.094q.78 0 1.328.547l4.531 4.531q.547.547.547 1.328v1.68l-1.25.508V13H9.625a2.04 2.04 0 0 1-1.328-.547 2.04 2.04 0 0 1-.547-1.328V6.75h-5q-.547 0-.898.352Q1.5 7.452 1.5 8v15q0 .547.352.898.35.352.898.352zM14 11.75a1 1 0 0 0-.195-.273L9.273 6.945A.6.6 0 0 0 9 6.79v4.336q.039.585.625.625zm-1.25 5.508q0 1.64.82 3.515t2.93 3.125v-8.125zm8.75 0-3.75-1.485v8.125q2.11-1.25 2.93-3.125t.82-3.515m-4.023-2.93 4.687 1.875q.547.234.586.86.04 1.288-.43 2.89-.43 1.602-1.562 3.086-1.172 1.485-3.281 2.383a.83.83 0 0 1-.704 0q-2.11-.899-3.28-2.383-1.134-1.485-1.563-3.086-.47-1.602-.43-2.89.039-.626.586-.86l4.687-1.875a.83.83 0 0 1 .704 0' />
    </g>
    <defs>
      <clipPath id='0566188d11aa2949f3decc30ea86b57e__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileShieldLgRegularIcon);
export default ForwardRef;
