.class final Lcom/tencent/bugly/legu/crashreport/crash/b$1;
.super Ljava/lang/Object;
.source "BUGLY"

# interfaces
.implements Lcom/tencent/bugly/legu/proguard/s;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/tencent/bugly/legu/crashreport/crash/b;->a(Ljava/util/List;JZ)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field private synthetic a:Ljava/util/List;

.field private synthetic b:Lcom/tencent/bugly/legu/crashreport/crash/b;


# direct methods
.method constructor <init>(Lcom/tencent/bugly/legu/crashreport/crash/b;Ljava/util/List;)V
    .locals 0

    .prologue
    .line 395
    iput-object p1, p0, Lcom/tencent/bugly/legu/crashreport/crash/b$1;->b:Lcom/tencent/bugly/legu/crashreport/crash/b;

    iput-object p2, p0, Lcom/tencent/bugly/legu/crashreport/crash/b$1;->a:Ljava/util/List;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public final a(Z)V
    .locals 1

    .prologue
    .line 403
    iget-object v0, p0, Lcom/tencent/bugly/legu/crashreport/crash/b$1;->b:Lcom/tencent/bugly/legu/crashreport/crash/b;

    iget-object v0, p0, Lcom/tencent/bugly/legu/crashreport/crash/b$1;->a:Ljava/util/List;

    invoke-static {p1, v0}, Lcom/tencent/bugly/legu/crashreport/crash/b;->a(ZLjava/util/List;)V

    .line 404
    return-void
.end method
