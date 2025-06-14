import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLanguageCaptionFillIcon = (
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
      <path d='M0 6.5C0 5.68.656 5 1.5 5h12c.82 0 1.5.68 1.5 1.5v6c0 .844-.68 1.5-1.5 1.5h-12A1.48 1.48 0 0 1 0 12.5zm7.5 0v6h6v-6zM4.172 7.625a.49.49 0 0 0-.422-.281.5.5 0 0 0-.445.281L1.805 11a.5.5 0 0 0 .234.633c.258.094.516 0 .633-.235l.21-.492h1.712l.21.492a.5.5 0 0 0 .633.235c.235-.117.329-.399.235-.633zm-.422 1.36.445.984h-.89zm6.75-1.641a.47.47 0 0 1 .469.468v.094h1.406a.47.47 0 0 1 .469.469.47.47 0 0 1-.469.469h-.047l-.047.117c-.21.562-.515 1.101-.937 1.523.023.024.047.024.07.047l.445.258c.211.14.282.422.164.656a.51.51 0 0 1-.656.164l-.422-.28c-.117-.048-.21-.118-.328-.188a3.7 3.7 0 0 1-.797.445l-.07.047a.5.5 0 0 1-.633-.235.503.503 0 0 1 .258-.632l.07-.024c.164-.07.305-.164.446-.234l-.282-.281a.48.48 0 0 1 0-.68c.164-.188.47-.188.657 0l.328.351h.023q.422-.457.703-1.054H8.813a.47.47 0 0 1-.47-.469.47.47 0 0 1 .47-.469h1.218v-.093a.47.47 0 0 1 .469-.47' />
    </g>
    <defs>
      <clipPath id='ea994d799a4eb755887288ec65ac1b37__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLanguageCaptionFillIcon);
export default ForwardRef;
