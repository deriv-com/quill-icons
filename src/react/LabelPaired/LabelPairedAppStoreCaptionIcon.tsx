import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedAppStoreCaptionIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m5.977 6.336-.188-.352a.5.5 0 0 0-.656-.187.495.495 0 0 0-.188.656l.492.844-1.57 2.719H2.648a.47.47 0 0 0-.468.468c0 .258.21.47.468.47h4.36c.21-.376-.07-.938-.54-.938h-1.5l2.063-3.563c.14-.234.047-.516-.187-.656-.211-.117-.516-.047-.633.187zm-1.829 5.11c-.257-.282-.562-.376-.96-.258l-.329.585a.467.467 0 0 0 .164.657c.235.117.54.047.657-.188zm3.961-1.43c-.632-1.102-1.101-1.899-1.406-2.438-.305.234-.586.914-.187 1.617.398.68.984 1.688 1.78 3.047.118.235.423.305.657.188a.49.49 0 0 0 .164-.657l-.469-.82h.704a.47.47 0 0 0 .468-.469.47.47 0 0 0-.468-.468zM6 3.688A5.81 5.81 0 0 1 11.813 9.5 5.81 5.81 0 0 1 6 15.313 5.81 5.81 0 0 1 .188 9.5 5.81 5.81 0 0 1 6 3.688M11.063 9.5c0-2.79-2.297-5.062-5.063-5.062C3.188 4.438.938 6.733.938 9.5A5.056 5.056 0 0 0 6 14.563 5.07 5.07 0 0 0 11.063 9.5' />
    </g>
    <defs>
      <clipPath id='d2562910f0da2ba62bf6f503ac8ec0cc__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAppStoreCaptionIcon);
export default ForwardRef;
