import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyCryptocurrenciesIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#fff'
      d='M15.968 20.748a4.622 4.622 0 1 1 0-9.246c1.365 0 2.642.573 3.522 1.585L22 10.93c-.881-1.057-2.026-1.805-3.302-2.245V5.999h-1.541v2.245c-.396-.044-.793-.088-1.189-.088-.44 0-.836.044-1.277.088V6h-1.54v2.686C10.157 9.829 8 12.735 8 16.125s2.157 6.296 5.15 7.44v2.686h1.541v-2.29c.397.045.837.088 1.277.088.396 0 .793-.043 1.189-.087v2.289h1.54v-2.642c1.277-.44 2.378-1.232 3.303-2.245l-2.554-2.201a4.62 4.62 0 0 1-3.478 1.585'
    />
    <path
      fill='#33658A'
      fillRule='evenodd'
      d='M6 0a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6h20a6 6 0 0 0 6-6V6a6 6 0 0 0-6-6zm5.345 16.125a4.618 4.618 0 0 0 8.1 3.038l2.555 2.201c-.925 1.013-2.026 1.805-3.302 2.245v2.642h-1.541v-2.29c-.396.045-.793.088-1.189.088-.44 0-.88-.043-1.277-.087v2.289h-1.54v-2.686C10.157 22.421 8 19.515 8 16.125s2.157-6.296 5.15-7.44V5.999h1.541v2.245l.11-.01c.398-.04.764-.078 1.167-.078.396 0 .793.044 1.189.088V6h1.54v2.686c1.277.44 2.422 1.188 3.303 2.245l-2.51 2.157a4.64 4.64 0 0 0-3.522-1.585 4.62 4.62 0 0 0-4.623 4.623'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(LegacyCryptocurrenciesIcon);
export default ForwardRef;
