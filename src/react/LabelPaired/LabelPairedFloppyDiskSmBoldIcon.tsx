import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFloppyDiskSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.688 6.375v8.75q.027.41.437.438h8.75q.41-.028.438-.438v-6.7a.45.45 0 0 0-.137-.327l.93-.93q.519.52.519 1.258v6.699q-.027.738-.52 1.23-.492.493-1.23.52h-8.75q-.738-.027-1.23-.52-.493-.492-.52-1.23v-8.75q.027-.738.52-1.23.492-.493 1.23-.52h6.727q.711 0 1.23.52l2.023 2.023-.93.93-2.023-2.024-.027-.027V8.78q-.054.602-.656.656h-5.25q-.602-.054-.656-.656V5.937h-.438q-.41.029-.437.438m2.187-.437v2.187h3.938V5.938zM4.75 12.5q.027-.985.875-1.504.875-.492 1.75 0 .848.52.875 1.504-.027.985-.875 1.504-.875.492-1.75 0-.848-.52-.875-1.504' />
    </g>
    <defs>
      <clipPath id='55f91b997bd2ba6ffbfa771ae0e7a038__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFloppyDiskSmBoldIcon);
export default ForwardRef;
