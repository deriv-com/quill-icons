import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTriangleExclamationLgBoldIcon = (
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
      <path d='M9.688 8.781 1.952 21.516a.56.56 0 0 0-.078.312q.039.508.586.547h15.117q.508-.039.547-.547a.7.7 0 0 0-.078-.312L10.312 8.78A.37.37 0 0 0 10 8.625a.37.37 0 0 0-.312.156m-1.602-.976Q8.789 6.789 10 6.75q1.25.04 1.914 1.055l7.734 12.734q.352.585.352 1.29-.039 1.015-.703 1.718-.704.664-1.719.703H2.461q-1.055-.039-1.758-.703Q.04 22.844 0 21.828q0-.703.352-1.289zm3.164 12.07q0 .547-.352.898-.35.352-.898.352-.547 0-.898-.352-.352-.35-.352-.898 0-.547.352-.898.35-.352.898-.352.547 0 .898.352.352.35.352.898m-.312-7.187v3.75q-.079.858-.938.937-.86-.078-.937-.937v-3.75q.078-.86.937-.938.859.078.938.938' />
    </g>
    <defs>
      <clipPath id='382e9c2bb10e0f7151fc877fa71f934b__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTriangleExclamationLgBoldIcon);
export default ForwardRef;
