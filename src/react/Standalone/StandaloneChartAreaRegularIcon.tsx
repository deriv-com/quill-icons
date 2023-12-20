import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneChartAreaRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path
      fillOpacity={0.72}
      d='M7.25 8.375v13.75c.026.52.208.963.547 1.328.364.339.807.521 1.328.547h16.25c.39.026.599.234.625.625-.026.39-.234.599-.625.625H9.125c-.885-.026-1.628-.326-2.227-.898-.572-.6-.872-1.342-.898-2.227V8.375c.026-.39.234-.599.625-.625.39.026.599.234.625.625m10.352 6.523-2.852-2.89-3.555 3.594a.52.52 0 0 0-.195.43v4.218h12.5v-3.672c0-.156-.052-.3-.156-.43l-2.422-2.812-1.524 1.562c-.26.235-.56.352-.898.352-.338 0-.638-.117-.898-.352m0-1.796L18.5 14l.898-.898.665-.665c.26-.234.56-.351.898-.351.365.026.664.17.898.43l2.422 2.851c.313.339.469.742.469 1.211v3.672c0 .365-.117.664-.352.898-.234.235-.533.352-.898.352H11c-.365 0-.664-.117-.898-.352-.235-.234-.352-.533-.352-.898v-4.219c0-.52.182-.963.547-1.328l3.555-3.555c.26-.26.56-.39.898-.39.338 0 .638.13.898.39z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneChartAreaRegularIcon);
export default ForwardRef;
