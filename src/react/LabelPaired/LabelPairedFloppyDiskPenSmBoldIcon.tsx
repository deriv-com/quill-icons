import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFloppyDiskPenSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.438 6.375v8.75q.027.41.437.438h5.66l-.328 1.312H1.875q-.738-.027-1.23-.52-.493-.492-.52-1.23v-8.75q.027-.738.52-1.23.492-.493 1.23-.52h6.727q.711 0 1.23.52l2.023 2.023-.93.93-2.023-2.024-.027-.027V8.78q-.054.602-.656.656h-5.25q-.602-.054-.656-.656V5.937h-.438q-.41.029-.437.438m10.417.793q.52.52.52 1.258v1.777l-1.312 1.313v-3.09a.45.45 0 0 0-.137-.328zm-8.23-1.23v2.187h3.938V5.938zM4.5 12.5q.027-.985.875-1.504.875-.492 1.75 0 .848.52.875 1.504-.027.985-.875 1.504-.875.492-1.75 0-.848-.52-.875-1.504m10.664-2.297.383.383q.328.355.328.766 0 .437-.328.793l-.793.793-1.941-1.942.792-.793q.356-.328.766-.328.438 0 .793.328m-6.508 4.95 3.528-3.528 1.941 1.941-3.527 3.528a1 1 0 0 1-.41.246l-1.641.41a.48.48 0 0 1-.41-.137.48.48 0 0 1-.137-.41l.41-1.64q.083-.247.246-.41' />
    </g>
    <defs>
      <clipPath id='4b1c381c24a043a83ea57dd4b0117b62__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFloppyDiskPenSmBoldIcon);
export default ForwardRef;
