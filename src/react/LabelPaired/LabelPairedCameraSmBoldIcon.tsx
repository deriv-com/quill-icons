import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCameraSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.441 4.625H8.56q.492 0 .902.3.382.275.547.74l.246.71h1.996q.738.027 1.23.52.493.492.52 1.23v7q-.027.738-.52 1.23-.492.493-1.23.52H1.75q-.738-.027-1.23-.52-.493-.492-.52-1.23v-7q.027-.738.52-1.23.492-.493 1.23-.52h1.996l.246-.71.63.218-.63-.219q.165-.465.547-.738.41-.3.902-.301M5.25 6.102 4.867 7.25q-.19.41-.629.438H1.75q-.41.027-.437.437v7q.027.41.437.438h10.5q.41-.028.438-.438v-7q-.028-.41-.438-.437H9.762a.65.65 0 0 1-.602-.438l-.383-1.148q-.081-.165-.218-.165H5.44q-.136 0-.191.165M7 14.688a3 3 0 0 1-1.531-.41 3 3 0 0 1-1.121-1.122 3 3 0 0 1-.41-1.531q0-.82.41-1.531a3 3 0 0 1 1.12-1.121q.712-.41 1.532-.41t1.531.41 1.121 1.12q.41.712.41 1.532t-.41 1.531a3 3 0 0 1-1.12 1.121q-.712.41-1.532.41m-1.75-3.063q.027.985.875 1.504.875.492 1.75 0 .848-.52.875-1.504-.027-.985-.875-1.504-.875-.492-1.75 0-.848.52-.875 1.504' />
    </g>
    <defs>
      <clipPath id='e09acf7640ff56517b17cd81a864dcff__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCameraSmBoldIcon);
export default ForwardRef;
