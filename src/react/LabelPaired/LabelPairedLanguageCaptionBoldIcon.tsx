import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLanguageCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.5 5h12c.82 0 1.5.68 1.5 1.5v6c0 .844-.68 1.5-1.5 1.5h-12A1.48 1.48 0 0 1 0 12.5v-6C0 5.68.656 5 1.5 5m12 1.125h-6v6.75h6a.385.385 0 0 0 .375-.375v-6a.4.4 0 0 0-.375-.375m-9.328 1.5a.49.49 0 0 0-.422-.281.5.5 0 0 0-.445.281L1.805 11a.5.5 0 0 0 .234.633c.258.094.516 0 .633-.235l.21-.492h1.712l.21.492a.5.5 0 0 0 .633.235c.235-.117.329-.399.235-.633zm.023 2.344h-.89l.445-.985zm6.493-2.625a.47.47 0 0 1 .468.468v.094h1.407a.47.47 0 0 1 .468.469.47.47 0 0 1-.469.469h-.046l-.047.117a4.6 4.6 0 0 1-.938 1.523c.024.024.047.024.07.047l.446.258c.21.14.281.422.164.656a.51.51 0 0 1-.656.164l-.446-.28c-.093-.048-.187-.118-.304-.188a4.4 4.4 0 0 1-.797.445l-.07.047a.5.5 0 0 1-.633-.235c-.094-.257 0-.515.234-.632l.094-.024c.14-.07.305-.164.445-.234l-.305-.281a.53.53 0 0 1 0-.68.53.53 0 0 1 .68 0l.328.351h.024q.42-.457.703-1.054H9a.47.47 0 0 1-.469-.469A.47.47 0 0 1 9 7.906h1.219v-.093a.47.47 0 0 1 .469-.47' />
    </g>
    <defs>
      <clipPath id='0e009b6611242ef2ada218deba4edd33__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLanguageCaptionBoldIcon);
export default ForwardRef;
